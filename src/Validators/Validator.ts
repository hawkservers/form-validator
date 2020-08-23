export default abstract class Validator<V, E = string, P = Array<unknown>> {
  public abstract readonly displayName: string;

  public abstract field: string;
  public abstract fullField: string;

  public abstract value: V;
  public abstract params: P;

  public abstract errorMessage: E | string;

  public abstract tester(): boolean;
  public abstract test(): true | never;

  public expected(): V | null {
    return this.tester() ? this.value : null;
  }

  public formatErrorMessage(): E | string {
    if (typeof this.errorMessage === 'string') {
      const message = this.errorMessage
        .replace('%f', this.field.charAt(0).toUpperCase() + this.field.slice(1))
        .replace('%ff', this.fullField);

      let value = ''
      if (typeof this.value === 'number') {
        value = this.value.toString();
      }

      return message.replace('%d', value);
    }

    return this.errorMessage;
  }
}
