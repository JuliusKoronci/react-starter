const formattedDate = (date) => {
    try {
        const serverDate = date.date?date.date:date;
        const locale = navigator.language || navigator.userLanguage;
        const fdate = new Date(serverDate).toLocaleString(locale, {hour12: false});
        const [d, t] = fdate.split(',');

        return t.substr(0, 6) + ' ' + d;
    } catch (e) {
        return '-';
    }
};

export default formattedDate;