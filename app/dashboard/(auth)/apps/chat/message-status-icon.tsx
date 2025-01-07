import { Check, CheckCheck } from "lucide-react";
import { MessageStatusIconType } from "./types";

export default function MessageStatusIcon({ status }: MessageStatusIconType) {
  switch (status) {
    case "read":
      return <CheckCheck className="h-4 w-4 flex-shrink-0 text-green-500" />;
    case "forwarded":
      return <CheckCheck className="h-4 w-4 flex-shrink-0 text-muted-foreground" />;
    case "sent":
      return <Check className="h-4 w-4 flex-shrink-0 text-muted-foreground" />;
    default:
      break;
  }
}
