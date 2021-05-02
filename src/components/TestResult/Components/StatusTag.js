import {Tag} from "antd";

const statusMap = {
    success: <Tag color="green">ERFOLGREICH</Tag>,
    failed: <Tag color="orange">FEHLGESCHLAGEN</Tag>,
    error: <Tag color="red">ERROR</Tag>
};

export const StatusTag = ({ status }) => statusMap[status];
