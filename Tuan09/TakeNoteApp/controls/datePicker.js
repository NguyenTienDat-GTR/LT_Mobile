import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = ({ selectedDate, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (selectedDate) {
            setIsOpen(false);
        }
    }, [selectedDate]);

    const handleDateChange = date => {
        onChange(date);
        setIsOpen(false);
    };

    return (
        <div>
            {isOpen ? (
                <DatePicker
                    selected={selectedDate}
                    onChange={date => handleDateChange(date)}
                    dateFormat="dd/MM/yyyy"
                />
            ) : (
                <button onClick={() => setIsOpen(true)}>Choose Date</button>
            )}
        </div>
    );
};

export default DatePickerComponent;
