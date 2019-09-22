import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Timeline from '../../components/Timeline/Timeline';
import ProjCards from '../../components/ProjCards/ProjCards';
import OrgCards from '../../components/OrgCard/OrgCards'



function LandingPage() {

  return (
    <div>
        <Navbar />
        <Timeline />
        {/* <ProjCards /> */}
        <OrgCards />
    </div>
  );
}

export default LandingPage;





