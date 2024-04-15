import { Link, Outlet } from "umi";

import React from "react";
import { Layout as AntdLayout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import "./index.less";

const Layout: React.FC = () => {
  return (
    <AntdLayout className="layout">
      <AntdLayout.Header className="header">Header</AntdLayout.Header>
      <AntdLayout>
        <AntdLayout.Sider className="sider">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "nav 1",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "nav 2",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
            ]}
          />
        </AntdLayout.Sider>
        <AntdLayout.Content className="content">
          <Outlet />
        </AntdLayout.Content>
      </AntdLayout>
      <AntdLayout.Footer className="footer">
        Software defect prediction system
      </AntdLayout.Footer>
    </AntdLayout>
  );
};

export default Layout;
