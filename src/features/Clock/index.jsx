import useClock from '../../hooks/useClock';

function Clock() {

    const { timeString } = useClock();
    return (
        <div>
            <span style={{ fontSize: '42px' }}>{timeString}</span>
        </div>
    );
}

export default Clock;