
import React from 'react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/hooks/useLanguage';
import { Users, Award, Target, Globe } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-e-dark text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('aboutPage.title')}</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('aboutPage.subtitle')}
          </p>
        </div>
        
        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-e-dark-accent p-8 rounded-lg border border-gray-800">
            <div className="flex items-center mb-4">
              <div className="bg-e-green/20 p-3 rounded-full mr-3">
                <Target className="h-6 w-6 text-e-green" />
              </div>
              <h2 className="text-2xl font-bold">{t('aboutPage.mission.title')}</h2>
            </div>
            <p className="text-gray-300">
              {t('aboutPage.mission.text')}
            </p>
          </div>
          
          <div className="bg-e-dark-accent p-8 rounded-lg border border-gray-800">
            <div className="flex items-center mb-4">
              <div className="bg-e-blue/20 p-3 rounded-full mr-3">
                <Globe className="h-6 w-6 text-e-blue" />
              </div>
              <h2 className="text-2xl font-bold">{t('aboutPage.vision.title')}</h2>
            </div>
            <p className="text-gray-300">
              {t('aboutPage.vision.text')}
            </p>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gray-800 p-2 rounded-full mr-2">
              <Users className="h-5 w-5 text-e-green" />
            </div>
            <h2 className="text-3xl font-bold">{t('aboutPage.team.title')}</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Team Member 1 */}
            <div className="bg-e-dark-accent rounded-lg overflow-hidden border border-gray-800 hover:border-e-green transition-all">
              <div className="h-48 bg-gray-700 flex items-center justify-center">
                <Users className="h-20 w-20 text-gray-500" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{t('aboutPage.team.member1.name')}</h3>
                <p className="text-e-green mb-2">{t('aboutPage.team.member1.role')}</p>
                <p className="text-gray-400 text-sm">
                  {t('aboutPage.team.member1.bio')}
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-e-dark-accent rounded-lg overflow-hidden border border-gray-800 hover:border-e-green transition-all">
              <div className="h-48 bg-gray-700 flex items-center justify-center">
                <Users className="h-20 w-20 text-gray-500" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{t('aboutPage.team.member2.name')}</h3>
                <p className="text-e-green mb-2">{t('aboutPage.team.member2.role')}</p>
                <p className="text-gray-400 text-sm">
                  {t('aboutPage.team.member2.bio')}
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-e-dark-accent rounded-lg overflow-hidden border border-gray-800 hover:border-e-green transition-all">
              <div className="h-48 bg-gray-700 flex items-center justify-center">
                <Users className="h-20 w-20 text-gray-500" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{t('aboutPage.team.member3.name')}</h3>
                <p className="text-e-green mb-2">{t('aboutPage.team.member3.role')}</p>
                <p className="text-gray-400 text-sm">
                  {t('aboutPage.team.member3.bio')}
                </p>
              </div>
            </div>
            
            {/* Team Member 4 */}
            <div className="bg-e-dark-accent rounded-lg overflow-hidden border border-gray-800 hover:border-e-green transition-all">
              <div className="h-48 bg-gray-700 flex items-center justify-center">
                <Users className="h-20 w-20 text-gray-500" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{t('aboutPage.team.member4.name')}</h3>
                <p className="text-e-green mb-2">{t('aboutPage.team.member4.role')}</p>
                <p className="text-gray-400 text-sm">
                  {t('aboutPage.team.member4.bio')}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Achievements */}
        <div className="bg-e-dark-accent p-8 rounded-lg border border-gray-800 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-e-yellow/20 p-3 rounded-full mr-3">
              <Award className="h-6 w-6 text-e-yellow" />
            </div>
            <h2 className="text-2xl font-bold">{t('aboutPage.achievements.title')}</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-e-yellow/10 p-2 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 rounded-full bg-e-yellow"></div>
              </div>
              <div>
                <h3 className="font-bold">{t('aboutPage.achievements.achievement1.title')}</h3>
                <p className="text-gray-400">{t('aboutPage.achievements.achievement1.description')}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-e-yellow/10 p-2 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 rounded-full bg-e-yellow"></div>
              </div>
              <div>
                <h3 className="font-bold">{t('aboutPage.achievements.achievement2.title')}</h3>
                <p className="text-gray-400">{t('aboutPage.achievements.achievement2.description')}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-e-yellow/10 p-2 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 rounded-full bg-e-yellow"></div>
              </div>
              <div>
                <h3 className="font-bold">{t('aboutPage.achievements.achievement3.title')}</h3>
                <p className="text-gray-400">{t('aboutPage.achievements.achievement3.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
