import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Timeline from '../../components/Timeline/Timeline';
import OrgCards from '../../components/OrgCards/OrgCards';

function LandingPage() {

  return (
    <div>
        <Navbar />
        <Timeline />
        <ProjCards />
        <OrgCards />
    </div>
  );
}

export default LandingPage;





