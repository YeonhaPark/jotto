export interface Props {
  success: boolean;
}
export default function Congrats({ success }: Props): JSX.Element | null {
  return success ? (
    <div data-test="component-congrats">
      <span data-test="congrats-message">
        Congratulations! You guessed the word
      </span>
    </div>
  ) : (
    <div data-test="component-congrats"></div>
  );
}
