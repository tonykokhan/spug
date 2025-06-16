/**
 * Copyright (c) OpenSpug Organization. https://github.com/openspug/spug
 * Copyright (c) <spug.dev@gmail.com>
 * Released under the AGPL-3.0 License.
 */
import React from 'react';
import { observer } from 'mobx-react';
import { AuthDiv, Breadcrumb } from 'components';
import ComTable from './Table';
import ComForm from './Form';
import MonitorCard from './MonitorCard';
import store from './store';
import { useLocation } from 'react-router-dom';

export default observer(function () {
  const location = useLocation();
  const isCertMonitor = location.pathname === '/monitor/cert';
  const isTaskMonitor = location.pathname === '/monitor/task';

  return (
    <AuthDiv auth="monitor.monitor.view">
      <Breadcrumb>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>监控中心</Breadcrumb.Item>
        <Breadcrumb.Item>{isCertMonitor ? '证书监控' : '监控任务'}</Breadcrumb.Item>
      </Breadcrumb>
      {isTaskMonitor && (
        <>
          <MonitorCard/>
          <ComTable/>
          {store.formVisible && <ComForm/>}
        </>
      )}
      {isCertMonitor && (
        <div style={{ padding: '24px', background: '#fff' }}>
          {/* 证书监控内容将在这里实现 */}
        </div>
      )}
    </AuthDiv>
  )
})
