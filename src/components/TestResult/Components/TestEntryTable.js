import {Table} from "antd";
import {StatusTag} from "./StatusTag";

const columns = [
    {
        title: 'Testfall',
        dataIndex: 'testcase',
        key: 'testcase',
        sorter: (a, b) => a.testcase < b.testcase,
    },
    {
        title: 'Beschreibung',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        filters: [
            {
              text: 'ERFOLGREICH',
              value: 'success'
            },
            {
                text: 'FEHLGESCHLAGEN',
                value: 'failed'
            },
        ],
        onFilter: (value, record) => record.status.indexOf(value) === 0,
        render: (text, record) => <StatusTag status={record.status}/>
    },
];

function entriesToData(result) {
    let data = [];

    result.entries.map(function (entry) {
        const dataEntry = {
            key: entry.task.id,
            testcase: entry.task.name,
            description: 'No description',
            status: entry.successful ? 'success' : 'failed',
        }

        return data.push(dataEntry);
    })

    return data;
}

function TestEntryTable(/*entries*/entries) {
    return (
        <div style={{padding: "0 20px 0 20px"}}>
            <Table
                columns={columns}
                dataSource={entriesToData(entries)}
                title={() => 'ULAM (Blatt 01)'}
            />
        </div>
    )
}



export default TestEntryTable;
