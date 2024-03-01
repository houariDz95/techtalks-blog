
const WriteForUsPage = () => {
  return (
    <div className="p-4">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold text-accentSoft dark:text-accentDark">Write for TechHubTalk</h1>
        <p className="text-gray-600">Share your knowledge and insights with our community.</p>
      </header>
      
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4 text-accentSoft dark:text-accentDark">About TechHubTalk</h2>
        <p className="text-gray-600">TechHubTalk is a blog dedicated to technology, communication, and gaming. We aim to provide valuable information and insights to our readers in these domains.</p>
      </section>
      
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4 text-accentSoft dark:text-accentDark">Guest Post Guidelines</h2>
        <p className="text-gray-600">We welcome guest contributions that align with our blog's focus. Please follow these guidelines when submitting your guest post:</p>
        <ul className="list-disc pl-8">
          <li>Content should be well-researched and unique.</li>
          <li>Preferred length: 800 - 1500 words.</li>
          {/* Add more guidelines here */}
        </ul>
      </section>

      {/* Add more sections for topics, quality standards, submission process, etc. */}
      
      <footer className="text-center mt-8 text-gray-600">
        <p>Ready to contribute? Email us at <a href="mailto:blogginggroup54@gmail.com" className="text-accentSoft dark:text-accentDark">blogginggroup54@gmail.com</a></p>
      </footer>
    </div>
  );
}

export default WriteForUsPage;
