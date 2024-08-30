export const formatAccountNumber = (accountNumber) => {
  if (!accountNumber || typeof accountNumber !== "number") {
    return "N/A";
  }

  // Ensure the account number is treated as a string
  const accountStr = accountNumber.toString();

  // Validate if the account number contains only digits
  if (!/^\d+$/.test(accountStr)) {
    return "N/A";
  }

  // Format the account number with hyphens
  return accountStr.replace(/(\d{3})(?=\d)/g, "$1-");
};
