import { Button, message, Steps } from "antd";
import React, { useState } from "react";
import Description from "./components/description";

import "./index.less";

const Detection: React.FC = () => {
  const [content, setContent] = useState<string>("First-content");
  const [current, setCurrent] = useState<number>(0);

  const steps = [
    {
      title: "选择特征",
      content: "First-content",
    },
    {
      title: "选择分类器",
      content: "Second-content",
    },
  ];
  const next = () => {
    setCurrent(current + 1);
    setContent("Second-content");
  };

  const prev = () => {
    setCurrent(current - 1);
    setContent("First-content");
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <div className="detection">
      <Steps className="detection-step" current={current} items={items} />
      <Description content={content} />
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            下一步
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            检测
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            上一步
          </Button>
        )}
      </div>
    </div>
  );
};

export default Detection;
