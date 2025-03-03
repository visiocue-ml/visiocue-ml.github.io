interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Cargo & Aviation Visual Anomaly Detection',
    description: `
      At Visiocue GmbH, based in Berlin and proudly funded by the Beumer Group, we are dedicated to revolutionizing cargo and aviation logistics. Our innovative AI solutions harness state-of-the-art computer vision techniques along with LiDar technology and wireless cameras to detect bad luggage that could potentially disrupt conveyor belt mechanics. This pioneering approach not only enhances operational safety but also optimizes the overall cargo flow.

      Our system meticulously identifies anomalies by analyzing various factors such as luggage size, shape, and even extended handles that deviate from the norm. Leveraging edge machine learning, our platform processes data in real-time, ensuring immediate detection and response to any irregularities. By integrating advanced computer vision algorithms, we deliver precision and reliability that modern cargo and aviation industries demand.

      With a remarkable 99% accuracy rate, we continuously calculate and analyze statistics of anomaly events, empowering our clients with actionable insights. To further enhance understanding, our platform includes intuitive SVG illustrations that visually represent the detection process, making it easier for operators to monitor and maintain optimal system performance.
    `,
    imgSrc: '/static/images/visiocue-project.svg',
    href: '/projects/cargo-aviation-ai',
  },
]

export default projectsData
