import React, { useEffect, useState } from 'react';
import { Box, Container, Heading, Text, Button, SimpleGrid, Stack, useToast } from '@chakra-ui/react';
import PackageCard from './components/PackageCard';
import PackageEditor from './components/PackageEditor';
import SitePreview from './components/SitePreview';
import { WEB3FORMS_ACCESS_KEY } from './config';

const STORAGE_KEY = 'kerala_tours_packages_v1';

export default function App() {
  const [packages, setPackages] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try { setPackages(JSON.parse(raw)); }
      catch {}
    } else {
      const sample = [
        { id: 'KT-01', title: 'Backwaters & Houseboat - 3 Nights', days: 3, price: 12000, short: 'Relaxing backwater cruise with houseboat stay.', details: 'Day 1: Arrival → Day 2: Backwaters → Day 3: Drop.' },
        { id: 'KT-02', title: 'Munnar Tea Trails - 2 Nights', days: 2, price: 9000, short: 'Hill-station getaway among tea gardens.', details: 'Visit Mattupetty dam, Echo point.' }
      ];
      setPackages(sample);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sample));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(packages));
  }, [packages]);

  function addPackage() {
    const p = { id: `KT-${Math.floor(Math.random()*9000)+100}`, title: 'New Package', days: 1, price: 5000, short: 'Short description', details: 'Detailed itinerary...' };
    setPackages(s => [p, ...s]);
  }

  function removePackage(idx) {
    if (!confirm('Delete?')) return;
    setPackages(s => s.filter((_, i) => i !== idx));
  }

  function saveEdit(idx, updated) {
    setPackages(s => s.map((it, i) => i === idx ? updated : it));
    setEditingIndex(null);
    toast({ title: 'Saved', status: 'success' });
  }

  return (
    <Container maxW="container.lg" py={6}>
      <Stack direction="row" justify="space-between">
        <Box>
          <Heading size="md">Kerala Tours — Admin</Heading>
          <Text fontSize="sm">Local editing (saved in browser)</Text>
        </Box>
        <Stack direction="row">
          <Button onClick={addPackage}>+ Add</Button>
          <Button onClick={() => setPreviewOpen(s => !s)}>{previewOpen ? "Edit Mode" : "Preview Site"}</Button>
        </Stack>
      </Stack>

      {!previewOpen ? (
        <>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mt={4}>
            {packages.map((p, idx) => (
              <Box key={p.id} p={4} bg="white" borderRadius="md" boxShadow="sm">
                <PackageCard pkg={p} />
                <Stack direction="row" mt={3}>
                  <Button size="sm" onClick={() => setEditingIndex(idx)}>Edit</Button>
                  <Button size="sm" onClick={() => removePackage(idx)}>Delete</Button>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>

          {editingIndex !== null && (
            <Box mt={4} p={4} bg="white" borderRadius="md" boxShadow="sm">
              <PackageEditor pkg={packages[editingIndex]} onCancel={() => setEditingIndex(null)} onSave={(upd) => saveEdit(editingIndex, upd)} />
            </Box>
          )}
        </>
      ) : (
        <SitePreview packages={packages} web3Key={WEB3FORMS_ACCESS_KEY} />
      )}
    </Container>
  );
}
