import * as React from 'react'
import './Links.style.css'

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
    title: 'genotype',
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
  <div id="apps-container">
    {appsList.map((app) => (
      <div key={app.id} className="app-item">
        <a href={app.url}>
          <img
            className="app-logo"
            src={`https://firebasestorage.googleapis.com/v0/b/cg-internal-portal-prod.appspot.com/o/apps%2F${app.id}.png?alt=media`}></img>
        </a>
        <h3>{app.title}</h3>
      </div>
    ))}
  </div>
)
