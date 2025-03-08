import { UiHeader } from '@tech-challenge/dashboard-ui';
import { TransactionInterface } from '@tech-challenge/dashboard-domain';

export function App() {
  const transaction: Partial<TransactionInterface> = {
    id: '123',
    amount: 100,
    categoryCode: '#12a580',
    creditDebitIndicator: 'DBIT'
  }

  return (
    <div>
      <UiHeader />
      <pre>
        {JSON.stringify(transaction, null, 2)}
      </pre>
    </div>
  );
}

export default App;
