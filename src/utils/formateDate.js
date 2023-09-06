export const formateDate = ( date, config )=>{
    const defaultOptions = { month: "short", year: "numeric", day: "numeric"};
    const options = config ? config: defaultOptions;

    return new Date(date).toLocaleDateString("en-US", options);
}