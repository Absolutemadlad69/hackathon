// Toast Notification Component
export class Toast {
  static show(message, type = 'info') {
    console.log(`[Toast ${type.toUpperCase()}]: ${message}`);
  }
}
