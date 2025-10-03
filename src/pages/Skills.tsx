import React from 'react';
import Heading from '../components/General/Heading';
import ImageWithCaption from '../components/General/ImageWithCaption';
import logos from '../assets/Logos';

const Skills: React.FC = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-16 px-8 bg-pinkish text-blackish">
        <div className="flex flex-col gap-4">
          <Heading level={4} className="text-center">
            I do web dev
          </Heading>
          <div className="flex flex-wrap justify-center gap-4">
            <ImageWithCaption
              src={logos.expressJs}
              alt="ExpressJS Logo"
              caption="ExpressJS"
            />
            <ImageWithCaption src={logos.html} alt="HTML Logo" caption="HTML" />
            <ImageWithCaption src={logos.css} alt="CSS Logo" caption="CSS" />
            <ImageWithCaption
              src={logos.javascript}
              alt="JavaScript Logo"
              caption="JavaScript"
            />
            <ImageWithCaption
              src={logos.nodejs}
              alt="NodeJS Logo"
              caption="NodeJS"
            />
            <ImageWithCaption
              src={logos.react}
              alt="React Logo"
              caption="React"
            />
            <ImageWithCaption
              src={logos.typescript}
              alt="TypeScript Logo"
              caption="TypeScript"
            />
            <ImageWithCaption src={logos.php} alt="PHP Logo" caption="PHP" />
            <ImageWithCaption
              src={logos.tailwindCss}
              alt="Tailwind CSS Logo"
              caption="Tailwind"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-16 justify-evenly">
          <div className="flex flex-col gap-4">
            <Heading level={4} className="text-center">
              use databases,
            </Heading>
            <div className="flex justify-center gap-4">
              <ImageWithCaption
                src={logos.oracleXE}
                alt="Oracle XE Logo"
                caption="Oracle XE"
              />
              <ImageWithCaption
                src={logos.mySQL}
                alt="MySQL Logo"
                caption="MySQL"
              />
              <ImageWithCaption
                src={logos.mongoDB}
                alt="MongoDB Logo"
                caption="MongoDB"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Heading level={4} className="text-center">
              and use version control
            </Heading>
            <div className="flex justify-center gap-4">
              <ImageWithCaption src={logos.git} alt="Git Logo" caption="Git" />
              <ImageWithCaption
                src={logos.gitHub}
                alt="GitHub Logo"
                caption="GitHub"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Heading level={4} className="text-center">
            I know many languages
          </Heading>
          <div className="flex flex-wrap gap-16 justify-evenly">
            <div className="sm:flex-1 flex flex-col gap-4">
              <Heading level={5} className="text-center">
                some programming languages
              </Heading>
              <div className="flex flex-wrap justify-center gap-4">
                <ImageWithCaption src={logos.c} alt="C Logo" caption="C" />
                <ImageWithCaption
                  src={logos.cpp}
                  alt="C++ Logo"
                  caption="C++"
                />
                <ImageWithCaption
                  src={logos.python}
                  alt="Python Logo"
                  caption="Python"
                />
                <ImageWithCaption
                  src={logos.javascript}
                  alt="JS Logo"
                  caption="JavaScript"
                />
                <ImageWithCaption src={logos.go} alt="Go Logo" caption="Go" />
                <ImageWithCaption
                  src={logos.java}
                  alt="Java Logo"
                  caption="Java"
                />
                <ImageWithCaption
                  src={logos.typescript}
                  alt="TS Logo"
                  caption="TypeScript"
                />
                <ImageWithCaption
                  src={logos.php}
                  alt="PHP Logo"
                  caption="PHP"
                />
              </div>
            </div>
            <div className="sm:flex-1 flex flex-col gap-4">
              <Heading level={5} className="text-center">
                ...and some spoken languages.
              </Heading>
              <div className="flex flex-wrap justify-center gap-4">
                <ImageWithCaption
                  src={logos.english}
                  alt="English Language Logo"
                  caption="English"
                />
                <ImageWithCaption
                  src={logos.hindi}
                  alt="Hindi Language Logo"
                  caption="Hindi"
                />
                <ImageWithCaption
                  src={logos.tamil}
                  alt="Tamil Language Logo"
                  caption="Tamil"
                />
                <ImageWithCaption
                  src={logos.kannada}
                  alt="Kannada Language Logo"
                  caption="Kannada"
                />
                <ImageWithCaption
                  src={logos.hindi}
                  alt="Konkani Language Logo"
                  caption="Konkani"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-16 justify-evenly">
          <div className="flex flex-col gap-4">
            <Heading level={4} className="text-center">
              I do design
            </Heading>
            <div className="flex flex-wrap justify-center gap-4">
              <ImageWithCaption
                src={logos.figma}
                alt="Figma Logo"
                caption="Figma"
              />
              <ImageWithCaption
                src={logos.blender}
                alt="Blender Logo"
                caption="Blender"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Heading level={4} className="text-center">
              and AI/ML
            </Heading>
            <div className="flex flex-wrap justify-center gap-4">
              <ImageWithCaption
                src={logos.skLearn}
                alt="Scikit-Learn Logo"
                caption="Scikit-Learn"
              />
              <ImageWithCaption
                src={logos.tensorflow}
                alt="TensorFlow Logo"
                caption="TensorFlow"
              />
              <ImageWithCaption
                src={logos.machineLearning}
                alt="LLMs logo"
                caption="LLMs"
              />
              <ImageWithCaption src={logos.rag} alt="RAG Logo" caption="RAG" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Heading level={4} className="text-center">
              across platforms.
            </Heading>
            <div className="flex flex-wrap justify-center gap-4">
              <ImageWithCaption
                src={logos.windows}
                alt="Windows Logo"
                caption="Windows"
              />
              <ImageWithCaption
                src={logos.linux}
                alt="Linux Logo"
                caption="Linux"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Heading level={4} className="text-center">
              I containerize
            </Heading>
            <div className="flex justify-center gap-4">
              <ImageWithCaption
                src={logos.docker}
                alt="Docker Logo"
                caption="Docker"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Heading level={4} className="text-center">
              and host projects on the web.
            </Heading>
            <div className="flex flex-wrap justify-center gap-4">
              <ImageWithCaption src={logos.aws} alt="AWS Logo" caption="AWS" />
              <ImageWithCaption
                src={logos.firebase}
                alt="Firebase Logo"
                caption="Firebase"
              />
              <ImageWithCaption
                src={logos.hostinger}
                alt="Hostinger Logo"
                caption="Hostinger"
              />
              <ImageWithCaption
                src={logos.heroku}
                alt="Heroku Logo"
                caption="Heroku"
              />
              <ImageWithCaption
                src={logos.vercel}
                alt="Vercel Logo"
                caption="Vercel"
              />
              <ImageWithCaption
                src={logos.gitHub}
                alt="GitHub Logo"
                caption="GH Pages"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
