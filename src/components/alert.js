import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertHeadsUps() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Note</AlertTitle>
      <AlertDescription className="text-muted-foreground">
        We are currently working on the feature to store video in a storage
        bucket for our streaming service. Although we initially used MongoDB,
        the 5GB limit on Atlas isn&apos;t sufficient for our needs. As college
        students, we have access to 100TB of space on Google Drive through our
        college email IDs, which we plan to use for video storage. While this
        feature is still being implemented, everything else in our service is
        ready.
        <br></br>
        Although, you can have look at{" "}
        <a
          href="https://www.figma.com/design/axVTF06GOFPGNCX43raod6/stremer?node-id=0-1&t=RP2PNG921pegpV9S-0"
          target="_blank"
          className="text-blue-500 font-semibold underline underline-offset-4">
          figma design.
        </a>
      </AlertDescription>
    </Alert>
  );
}
