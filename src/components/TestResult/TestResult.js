import CFilesList from "./Components/CFilesList";
import TestEntryTable from "./Components/TestEntryTable";
import {Button, Descriptions, Divider, PageHeader} from "antd";
import Overview from "./Components/Overview";

function TestResult(props) {
    return (
        <div>
            <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title="Auswertungsprotokoll"
                subTitle="PPR Testbench"
                extra={[
                    <Button key="1">
                        PDF herunterladen
                    </Button>
                ]}
            >
                <Descriptions size="small" column={3}>
                    <Descriptions.Item label="Name">Simon Schöpke</Descriptions.Item>
                    <Descriptions.Item label="Erstellt">Sonntag, 2. Mai 2021 um 16:02</Descriptions.Item>
                    <Descriptions.Item label="Link zur Auswertung">
                        <a href="http://localhost:3000/test-result">Auswertungsprotokoll</a>
                    </Descriptions.Item>
                    <Descriptions.Item label="Link zur Testbench">
                        <a href="http://localhost:3000/">PPR Testbench</a>
                    </Descriptions.Item>
                </Descriptions>
            </PageHeader>
            <Divider orientation="left">Übersicht</Divider>
            <Overview/>
            <Divider orientation="left">Auswertung</Divider>
            <TestEntryTable entries={props.entries}/>
            <Divider orientation="left">Anhang</Divider>
            <CFilesList files={props.files} />
        </div>
    )
}

export default TestResult;
