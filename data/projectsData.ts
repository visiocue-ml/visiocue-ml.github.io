interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Conveyable luggage classification',
    description: `Use cameras with computer vision systems to sort and classify luggage by size, shape, missing parts and track it across a conveyor belt system.`,
    imgSrc: '/static/images/anomaly.jpg',
    href: 'https://visiocue.com',
  },
    {
      title: 'Human intrusion detection',
      description: `This advanced human intrusion computer vision system employs strategically placed cameras to detect unauthorized human presence in industrial environments such as airport conveyor belt areas. By continuously monitoring these critical zones, it helps prevent injuries, equipment damage, and regulatory violations, ensuring both operational safety and efficiency.`,
      imgSrc: '/static/images/anom3.jpg',
      href: 'https://visiocue.com',
    },
]

export default projectsData
