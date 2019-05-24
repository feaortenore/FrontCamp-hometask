import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root',
})
export class MessageLogService {

  public log: Message[] = [];

  public error(error: Error, message: string): void {
    this.log.push(
      {
        display: true,
        type: 'danger',
        message,
        details: error.message,
      },
    );
  }

  public message(message: string, details: string): void {
    this.log.push(
      {
        display: true,
        type: 'info',
        message,
        details,
      },
    );
  }

}
