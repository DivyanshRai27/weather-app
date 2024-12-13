/**
 * Custom hook to get the current date and time, updating every minute.
 *
 * @returns {Object} An object containing the current date and time.
 * @returns {string} date - The current date in the format "Weekday, Day, Month".
 * @returns {string} time - The current time in the format "Hour:Minute AM/PM".
 *
 * @example
 * const { date, time } = useDate();
 * console.log(date); // e.g., "Friday, 13, December"
 * console.log(time); // e.g., "10:30 AM"
 */
import { useEffect, useState } from "react";

export const useDate = () => {
    const locale = 'en';
    const [today, setDate] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 60*1000)

        return () => {
            clearInterval(timer)
        }
    },[])

    const day = today.toLocaleDateString(locale, {weekday: 'long'})
    const date = `${day}, ${today.getDate()}, ${today.toLocaleDateString(locale, {month: 'long'})}\n\n`
    const time = today.toLocaleDateString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' })

    return {
        date, time
    }
}