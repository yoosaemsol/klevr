import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
// eslint-disable-next-line object-curly-newline
import { Box, Divider, Drawer, Hidden, List } from '@material-ui/core';
import {
  BarChart as BarChartIcon,
  Settings as SettingsIcon,
  FileText as TaskIcon,
  Grid as ZoneIcon,
  Key as CredentialIcon,
  AlignLeft as LogIcon,
  UserCheck as AgentIcon
} from 'react-feather';
import NavItem from './NavItem';
import { x } from '@xstyled/emotion';

const items = [
  {
    href: '/app/overview',
    icon: BarChartIcon,
    title: 'Overview'
  },
  {
    href: '/app/tasks',
    icon: TaskIcon,
    title: 'Tasks'
  },
  {
    href: '/app/credentials',
    icon: CredentialIcon,
    title: 'Credentials'
  },
  {
    href: '/app/agent',
    icon: AgentIcon,
    title: 'Agent'
  },
  {
    href: '/app/logs',
    icon: LogIcon,
    title: 'Logs'
  },
  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Settings'
  }
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => {
            if (item.title === 'Overview') {
              return (
                <x.div>
                  <NavItem
                    href={item.href}
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                  />
                </x.div>
              );
            } else if (item.title === 'Settings') {
              return (
                <x.div>
                  <NavItem
                    href={item.href}
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                  />
                </x.div>
              );
            } else {
              return (
                <x.div ml="25px">
                  <NavItem
                    href={item.href}
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                  />
                </x.div>
              );
            }
          })}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)'
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default DashboardSidebar;
