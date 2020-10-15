import * as React from 'react'
import './Apps.style.css'

const appsList = [
  {
    id: 'cg',
    title: 'Order Portal',
    url: 'https://clinical.scilifelab.se',
  },
  {
    id: 'admin',
    title: 'StatusDB',
    url: 'https://clinical-api.scilifelab.se/admin/',
  },
  {
    id: 'supportsystem',
    title: 'Support System',
    url: 'https://clinical-scilifelab.supportsystem.com/scp/login.php',
  },
  {
    id: 'amsystem',
    title: 'AM System',
    url: 'https://jo812.amsystem.com/index.php',
  },
  {
    id: 'lims',
    title: 'Clarity LIMS',
    url: 'https://clinical-lims.scilifelab.se/clarity/',
  },
  {
    id: 'trailblazer',
    title: 'Trailblazer',
    url: 'https://trailblazer.scilifelab.se/',
  },
  {
    id: 'genotype',
    title: 'Genotype',
    url: 'https://genotype.scilifelab.se/',
  },
  {
    id: 'scout',
    title: 'Scout',
    url: 'https://scout.scilifelab.se/',
  },
  {
    id: 'scout-stage',
    title: 'Scout-stage',
    url: 'https://scout-stage.scilifelab.se/',
  },
  {
    id: 'nipt',
    title: 'NIPT Viewer',
    url: 'https://nipt.scilifelab.se/',
  },
  {
    id: 'github',
    title: 'CG GitHub',
    url: 'https://github.com/Clinical-Genomics',
  },
]

export const Apps = () => (
  <div id="appsContainer">
    {appsList.map((app) => (
      <div key={app.id} className="appItem">
        <a href={app.url}>
          <img src={`public/apps/${app.id}.png`}></img>
        </a>
        <h3>{app.title}</h3>
      </div>
    ))}
  </div>
)
