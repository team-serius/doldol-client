import React from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { ArrowSLineLeft } from '@icons/ArrowSLineLeft';
import { ArrowSLineRight } from '@icons/ArrowSLineRight';
import ko from 'date-fns/locale/ko';
import { getYear } from 'date-fns';
import { Calendar } from '@icons/Calendar';

// registerLocale('ko', ko);
// FIXME: react-datepicker 와 date-fns의 양식이 달라 에러 발생

interface Props {
  date: Date | undefined;
  onChange: (date: Date) => void;
  placeholder?: string;
  disabled?: boolean;
  minDate?: Date;
  maxDate?: Date;
}

const YEARS = Array.from(
  { length: getYear(new Date()) + 1 - 2024 },
  (_, i) => getYear(new Date()) - i
);

export const Datepicker: React.FC<Props> = ({
  date,
  onChange,
  placeholder,
  disabled,
  minDate = new Date('2024-06-01'),
  maxDate = new Date(),
}) => {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <DatePicker
      locale="ko"
      placeholderText={placeholder}
      showIcon
      onInputClick={toggleOpen}
      onClickOutside={() => setOpen(false)}
      disabled={disabled}
      open={open}
      icon={<Icon icon={Calendar} onClick={toggleOpen} />}
      selected={date}
      renderCustomHeader={({
        date,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        changeYear,
        nextMonthButtonDisabled,
      }) => (
        <div className="flex justify-between items-center px-4 bg-white">
          <Button
            className="!border border-gray-3"
            variant="ghost"
            size={'small'}
            shape="circle"
            disabled={prevMonthButtonDisabled}
            onClick={decreaseMonth}
            icon={{ DefaultComponent: ArrowSLineLeft }}
          />
          <div className="flex gap-2">
            <select value={getYear(date)} onChange={({ target: { value } }) => changeYear(+value)}>
              {YEARS.map((option) => (
                <option key={option} value={option}>
                  {option}년
                </option>
              ))}
            </select>
            <span>{date.getMonth() + 1}월</span>
          </div>

          <Button
            className="!border border-gray-3"
            variant="ghost"
            size={'small'}
            shape="circle"
            disabled={nextMonthButtonDisabled}
            onClick={increaseMonth}
            icon={{ DefaultComponent: ArrowSLineRight }}
          />
        </div>
      )}
      isClearable
      dateFormat="YY.MM.dd"
      onChange={onChange}
      minDate={minDate}
      maxDate={maxDate}
    />
  );
};
