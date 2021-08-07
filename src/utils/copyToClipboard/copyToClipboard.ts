const copyToClipboard = (text: string): { success: boolean } => {
  try {
    navigator.clipboard.writeText(text);
    return {
      success: true
    };
  } catch (error) {
    return {
      success: false
    };
  }
};

export default copyToClipboard;
