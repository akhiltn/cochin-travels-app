import React, { useState } from 'react';
import { Input, Textarea, Stack, Button, HStack } from '@chakra-ui/react';

export default function PackageEditor({ pkg, onCancel, onSave }) {
  const [draft, setDraft] = useState({ ...pkg });

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSave(draft); }}>
      <Stack spacing={3}>
        <Input value={draft.title} onChange={(e)=>setDraft({...draft, title: e.target.value})} />
        <Input value={draft.short} onChange={(e)=>setDraft({...draft, short: e.target.value})} />
        <Textarea value={draft.details} onChange={(e)=>setDraft({...draft, details: e.target.value})} />
        <HStack>
          <Input type='number' value={draft.days} onChange={(e)=>setDraft({...draft, days:+e.target.value})} />
          <Input type='number' value={draft.price} onChange={(e)=>setDraft({...draft, price:+e.target.value})} />
        </HStack>
        <HStack>
          <Button type='submit'>Save</Button>
          <Button variant='outline' onClick={onCancel}>Cancel</Button>
        </HStack>
      </Stack>
    </form>
  );
}
