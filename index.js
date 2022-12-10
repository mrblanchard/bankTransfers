// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Bank Transfers</h1>`;
function solution(R, V) {
  // Initialize the minimum initial balances for both banks
  let bankA = 0,
    bankB = 0;

  // Loop through the transfers
  for (let i = 0; i < R.length; i++) {
    // If the transfer is to bank A
    if (R[i] === 'A') {
      // Decrement the balance of bank A by the transfer amount
      bankA -= V[i];
      // If the balance of bank A goes below 0, add the difference to the minimum initial balance of bank A
      if (bankA < 0) bankA -= bankA;
    }
    // If the transfer is to bank B
    else {
      // Decrement the balance of bank B by the transfer amount
      bankB -= V[i];
      // If the balance of bank B goes below 0, add the difference to the minimum initial balance of bank B
      if (bankB < 0) bankB -= bankB;
    }
  }

  // Return the minimum initial balances for both banks
  return [bankA, bankB];
}
// Should return [2, 4]
solution('BAABA', [2, 4, 1, 1, 2]);

// Should return [0, 15]
solution('ABAB', [10, 5, 10, 15]);

// Should return [100, 0]
solution('B', [100]);
