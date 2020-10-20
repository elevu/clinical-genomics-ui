import * as React from 'react'
import './Links.style.css'
import { assetsDir } from '../../helpers/constants'

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
    title: 'Support',
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

export const LinkList = () => (
  <div className="links-container">
    {appsList.map((app) => (
      <div key={app.id} className="app-item">
        <a href={app.url}>
          <img className="app-logo" src={`${assetsDir}apps/${app.id}.png`}></img>
          <div className="app-name">{app.title}</div>
        </a>
      </div>
    ))}
  </div>
)
