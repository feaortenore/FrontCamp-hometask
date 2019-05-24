import { Component } from '@angular/core';
import { Message } from 'src/app/models/message.model';
import { MessageLogService } from 'src/app/services/message-log.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.sass'],
})
export class MessageComponent {

  constructor(public messageLogService: MessageLogService) { }

  public onClose(message: Message): void {
    message.display = false;
  }
}
