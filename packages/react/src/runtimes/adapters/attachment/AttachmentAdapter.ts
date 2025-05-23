import {
  Attachment,
  PendingAttachment,
  CompleteAttachment,
} from "../../../types/AttachmentTypes";

export type AttachmentAdapter = {
  accept: string;

  add(state: {
    file: File;
  }): Promise<PendingAttachment> | AsyncGenerator<PendingAttachment, void>;
  remove(attachment: Attachment): Promise<void>;
  send(attachment: PendingAttachment): Promise<CompleteAttachment>;
};
