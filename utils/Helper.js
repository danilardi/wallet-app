// change "2025-04-27T08:00:00.000Z" to "20:10 - 30 June 2022 WIB"
export const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Konversi ke WIB (UTC+7)
    const wibTime = new Date(date.getTime() + (7 * 60 * 60 * 1000));

    const hours = wibTime.getHours().toString().padStart(2, '0');
    const minutes = wibTime.getMinutes().toString().padStart(2, '0');
    const day = wibTime.getDate();
    const month = wibTime.toLocaleString('en-US', { month: 'long' });
    const year = wibTime.getFullYear();

    return `${hours}:${minutes} - ${day} ${month} ${year}`;
}

// change "-75000" to "- Rp75.000,00"
export const formatCurrency = (amount) => {
    const formattedAmount = Math.abs(amount).toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    return amount < 0 ? `- ${formattedAmount}` : `+ ${formattedAmount}`;
}

export const formatCurrency2 = (amount) => {
    const formattedAmount = Math.abs(amount).toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    return amount < 0 ? `- ${formattedAmount}` : `${formattedAmount}`;
}
