import * as React from 'react'
import './Links.style.css'
import cgLogo from 'assets/apps/cg.png'
import supportSystemLogo from 'assets/apps/support-system.png'
import amSystemLogo from 'assets/apps/am-system.png'
import limsLogo from 'assets/apps/lims.png'
import trailblazerLogo from 'assets/apps/trailblazer.png'
import genotypeLogo from 'assets/apps/genotype.png'
import scoutLogo from 'assets/apps/scout.png'
import scoutStageLogo from 'assets/apps/scout-stage.png'
import niptLogo from 'assets/apps/nipt.png'
import gitHubLogo from 'assets/apps/github.png'
import adminLogo from 'assets/apps/admin.png'

const appsList = [
  {
    img: cgLogo,
    title: 'Order Portal',
    url: 'https://clinical.scilifelab.se',
  },
  {
    img: adminLogo,
    title: 'StatusDB',
    url: 'https://clinical-api.scilifelab.se/admin/',
  },
  {
    img: supportSystemLogo,
    title: 'Support',
    url: 'https://clinical-scilifelab.supportsystem.com/scp/login.php',
  },
  {
    img: amSystemLogo,
    title: 'AM System',
    url: 'https://jo812.amsystem.com/index.php',
  },
  {
    img: limsLogo,
    title: 'Clarity LIMS',
    url: 'https://clinical-lims.scilifelab.se/clarity/',
  },
  {
    img: trailblazerLogo,
    title: 'Trailblazer',
    url: 'https://trailblazer.scilifelab.se/',
  },
  {
    img: genotypeLogo,
    title: 'Genotype',
    url: 'https://genotype.scilifelab.se/',
  },
  {
    img: scoutLogo,
    title: 'Scout',
    url: 'https://scout.scilifelab.se/',
  },
  {
    img: scoutStageLogo,
    title: 'Scout-stage',
    url: 'https://scout-stage.scilifelab.se/',
  },
  {
    img: niptLogo,
    title: 'NIPT Viewer',
    url: 'https://nipt.scilifelab.se/',
  },
  {
    img: gitHubLogo,
    title: 'CG GitHub',
    url: 'https://github.com/Clinical-Genomics',
  },
]

export const LinkList = () => (
  <div className="links-container">
    {appsList.map((app) => (
      <div key={app.title} className="app-item">
        <a href={app.url}>
          <img className="app-logo" src={app.img}></img>
          <div className="app-name">{app.title}</div>
        </a>
      </div>
    ))}
  </div>
)
