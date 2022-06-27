import dummy from '../db/data.json';

export default function DayList(){
    console.log(dummy)
    return (
        <ul classname='list_day'>
            {dummy.days.map(day=><li key={day.id}>Day {day.day}</li>)}
        </ul>
    );
}