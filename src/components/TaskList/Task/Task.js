export function Task({ id, name, executor, status }) {

    return (
        <tr className='task_table_tr'>
            <td>{id}</td>
            <td className="task__name_td">{name}</td>
            <td className="task--status">
                <select>
                    <option>Open</option>
                    <option>Close</option>
                    <option>Work</option>
                </select>
            </td>
            <td>{executor}</td>
        </tr>

    )
}