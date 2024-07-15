import React from 'react';

const Projects = () => {
  // Örnek projelerin listesi
  const projects = [
    {
      id: 1,
      title: 'POS Yazılımı',
      description: 'Kendi geliştirdiğim POS yazılımı. Müşteri yönetimi, sipariş takibi ve raporlama gibi özellikler sunuyor.',
      imageUrl: '/images/pos-software.png',
      githubUrl: 'https://github.com/username/pos-software',
      demoUrl: 'https://www.example.com/pos-demo'
    },
    {
      id: 2,
      title: 'Web Uygulaması',
      description: 'Müşteri yönetimi ve online satış özelliklerine sahip web uygulaması. React ve Firebase ile geliştirildi.',
      imageUrl: '/images/web-app.png',
      githubUrl: 'https://github.com/username/web-app',
      demoUrl: 'https://www.example.com/web-demo'
    }
    // Diğer projeleri buraya ekleyebilirsiniz
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Projelerim</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <div key={project.id} className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex justify-between">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
