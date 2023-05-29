export const FeedbackOptions = ({ good, neutral, bad }) => {
  return (
    <li style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
      <button onClick={good}>Good</button>
      <button onClick={neutral}>Neutral</button>
      <button onClick={bad}>Bad</button>
    </li>
  );
};
