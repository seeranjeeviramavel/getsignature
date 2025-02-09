import { templates } from '@/lib/constants';
import { SignatureData } from '@/lib/types';

interface SignaturePreviewProps {
  signatureData: SignatureData;
}

export function SignaturePreview({ signatureData }: SignaturePreviewProps) {
  const SelectedTemplate = templates[signatureData.template as keyof typeof templates];

  return (
           <SelectedTemplate data={signatureData} />
  );
}
