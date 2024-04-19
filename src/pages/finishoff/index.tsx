import React from "react";
import { Card, Col, Row, Table, Tag, Progress } from "antd";

import "./index.less";

const Finishoff: React.FC = () => {
  const dataSource = [
    {
      key: "1",
      codeDefectData: "Ant",
      version: 1.7,
      f1value: 98.1,
      auc: 96.46,
    },
    {
      key: "2",
      codeDefectData: "Camel",
      version: 1.6,
      f1value: 96.12,
      auc: 97.22,
    },
    {
      key: "3",
      codeDefectData: "jEdit",
      version: 4.1,
      f1value: 97.11,
      auc: 90.43,
    },
    {
      key: "4",
      codeDefectData: "Lucene",
      version: 2.4,
      f1value: 95.15,
      auc: 94.45,
    },
    {
      key: "4",
      codeDefectData: "Poi",
      version: 3.0,
      f1value: 85.13,
      auc: 91.75,
    },
    {
      key: "4",
      codeDefectData: "Poi",
      version: 3.0,
      f1value: 85.13,
      auc: 91.75,
    },
    {
      key: "5",
      codeDefectData: "Velocity",
      version: 1.6,
      f1value: 90.11,
      auc: 96.49,
    },
    {
      key: "6",
      codeDefectData: "Xalan",
      version: 2.6,
      f1value: 92.11,
      auc: 95.01,
    },
  ];

  const columns = [
    {
      title: "代码缺陷数据集",
      dataIndex: "codeDefectData",
      key: "codeDefectData",
      width: "20%",
    },
    {
      title: "版本",
      dataIndex: "version",
      key: "version",
      width: "20%",
    },
    {
      title: "F1值",
      dataIndex: "f1value",
      key: "f1value",
      render: (_: any, record: Record<string, any>) => (
        <Progress percent={record.f1value} />
      ),
    },
    {
      title: "AUC",
      dataIndex: "auc",
      key: "auc",
      render: (_: any, record: Record<string, any>) => (
        <Progress percent={record.auc} strokeColor="#87d068" />
      ),
    },
  ];

  return (
    <div>
      <div className="title">多层感知机</div>
      <Row gutter={16} className="content">
        <Col span={8}>
          <Card title="测试集数量" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="训练集数量" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="使用的特征" bordered={false}>
            <>
              <Tag color="green" key="ast">
                语义特征
              </Tag>
              <Tag color="geekblue" key="cdn">
                结构特征
              </Tag>
            </>
          </Card>
        </Col>
      </Row>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
};

export default Finishoff;
