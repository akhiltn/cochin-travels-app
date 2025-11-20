import React, { useState } from 'react';
import { Stack, Input, Textarea, Button, useToast } from '@chakra-ui/react';

export default function ContactForm({ web3Key }) {
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [sending, setSending] = useState(false);
  const toast = useToast();

  async function submit(e){
    e.preventDefault();
    setSending(true);
    try{
      const payload = { access_key:web3Key, ...form, subject:`Enquiry (${form.name})` };
      const resp = await fetch("https://api.web3forms.com/submit",{
        method:"POST", headers:{ "Content-Type":"application/json" }, body:JSON.stringify(payload)
      });
      const data = await resp.json();
      if(data.success){
        toast({ title:"Sent", status:"success" });
        setForm({ name:'', email:'', message:'' });
      } else toast({ title:"Failed", status:"error" });
    }finally{ setSending(false); }
  }

  return (
    <form onSubmit={submit}>
      <Stack spacing={3}>
        <Input placeholder="Name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} required />
        <Input placeholder="Email" value={form.email} type="email" onChange={(e)=>setForm({...form,email:e.target.value})} required />
        <Textarea placeholder="Message" value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} required />
        <Button type="submit" isLoading={sending}>Send</Button>
      </Stack>
    </form>
  );
}
