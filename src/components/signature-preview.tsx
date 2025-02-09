import { templates } from '@/lib/constants';
import { SignatureData } from '@/lib/types';
import { Mail, Phone, MapPin } from 'lucide-react';

interface SignaturePreviewProps {
  signatureData: SignatureData;
}

export function SignaturePreview({ signatureData }: SignaturePreviewProps) {
  const SelectedTemplate = templates[signatureData.template as keyof typeof templates];

  return (
    <div
      id="signature-preview"
      className="border rounded-lg p-4 min-h-[200px] bg-white dark:bg-gray-800"
    >
      <SelectedTemplate data={signatureData} />
    </div>
  );
}

