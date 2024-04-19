import { Outlet, useNavigate, useLocation } from "umi";

import React, { useState, useEffect } from "react";
import { Layout as AntdLayout, Menu, Dropdown, Button } from "antd";
import type { MenuProps } from "antd";
import {
  DashboardOutlined,
  SmileOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

import "./index.less";

const Layout: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = useState<string>("");
  let navigate = useNavigate();
  let location = useLocation();
  const items: MenuProps["items"] = [
    {
      key: "logout",
      label: "退出登录",
    },
  ];

  useEffect(() => {
    setSelectedKeys(location.pathname.slice(1));
  }, [location.pathname]);

  const onClick: MenuProps["onClick"] = (e) => {
    navigate("./" + e.key);
  };

  return (
    <AntdLayout className="layout">
      <AntdLayout.Header className="header">
        <div>软件缺陷预测</div>
        <Dropdown menu={{ items }} placement="bottom">
          <div>用户名</div>
        </Dropdown>
      </AntdLayout.Header>
      <AntdLayout>
        <AntdLayout.Sider className="sider">
          <Menu
            mode="inline"
            onClick={onClick}
            defaultSelectedKeys={["home"]}
            selectedKeys={[selectedKeys]}
            items={[
              {
                key: "home",
                icon: <SmileOutlined />,
                label: "首页",
              },
              {
                key: "detection",
                icon: <DashboardOutlined />,
                label: "检测",
              },
              {
                key: "finishoff",
                icon: <CheckCircleOutlined />,
                label: "结果",
              },
            ]}
          />
        </AntdLayout.Sider>
        <AntdLayout.Content className="content">
          <Outlet />
        </AntdLayout.Content>
      </AntdLayout>
    </AntdLayout>
  );
};

export default Layout;
