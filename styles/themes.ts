export interface Theme {
  background: string;
  backgroundStyle: string;
  text: string;
  primary: string;
  secondary: string;
  button: string;
  buttonRipple: string;
  iconBackground: string;
  icon: string;
  card: string;
  skillCard: string;
  activityCard: string;
  header: string;
  headerLink: string;
  timeline: {
    line: string;
    dot: string;
  };
  timelineAnimation: string;
  heroPattern: string;
  floatingIcons: string;
}

export const themes: Record<string, Theme> = {
  light: {
    background: 'bg-white',
    backgroundStyle: 'linear-gradient(to bottom, #ffffff, #f0f0f0)',
    text: 'text-gray-900',
    primary: 'text-blue-600',
    secondary: 'text-blue-500',
    button: 'relative overflow-hidden group bg-red-500 text-black hover:bg-blue-600 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl',
    buttonRipple: 'absolute top-0 left-0 w-full h-full bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left',
    iconBackground: 'bg-blue-100',
    icon: 'text-blue-500',
    card: 'bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100',
    skillCard: 'bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200',
    activityCard: 'bg-blue-50 rounded-lg p-6 hover:bg-blue-100 transition-colors duration-300',
    header: 'bg-white/80 backdrop-blur-md',
    headerLink: 'text-gray-600 hover:text-blue-600 transition-colors duration-300',
    timeline: {
      line: 'bg-blue-200',
      dot: 'bg-blue-500'
    },
    timelineAnimation: 'from-blue-200 to-blue-500',
    heroPattern: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 25%)',
    floatingIcons: 'text-blue-500'
  },
  dark: {
    background: 'bg-gray-900',
    backgroundStyle: 'linear-gradient(to bottom, #1a202c, #2d3748)',
    text: 'text-white',
    primary: 'text-purple-400',
    secondary: 'text-purple-300',
    button: 'relative overflow-hidden group bg-purple-500 text-white hover:bg-purple-600 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl',
    buttonRipple: 'absolute top-0 left-0 w-full h-full bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left',
    iconBackground: 'bg-gray-800',
    icon: 'text-purple-400',
    card: 'bg-gray-800 rounded-lg shadow-lg hover:shadow-purple-500/10 transition-shadow duration-300 p-6 border border-gray-700',
    skillCard: 'bg-gray-800 rounded-lg shadow-lg hover:shadow-purple-500/10 transition-all duration-300 p-6 border border-gray-700 hover:border-purple-500',
    activityCard: 'bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition-colors duration-300',
    header: 'bg-gray-900/80 backdrop-blur-md',
    headerLink: 'text-gray-300 hover:text-purple-400 transition-colors duration-300',
    timeline: {
      line: 'bg-purple-900',
      dot: 'bg-purple-400'
    },
    timelineAnimation: 'from-purple-900 to-purple-400',
    heroPattern: 'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 25%)',
    floatingIcons: 'text-purple-400'
  },
  nature: {
    background: 'bg-green-50',
    backgroundStyle: 'linear-gradient(to bottom, #f0fff4, #c6f6d5)',
    text: 'text-green-900',
    primary: 'text-green-700',
    secondary: 'text-green-600',
    button: 'relative overflow-hidden group bg-green-600 text-dark hover:bg-green-700 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl',
    buttonRipple: 'absolute top-0 left-0 w-full h-full bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left',
    iconBackground: 'bg-green-100',
    icon: 'text-green-600',
    card: 'bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-green-100',
    skillCard: 'bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-green-100 hover:border-green-300',
    activityCard: 'bg-green-100 rounded-lg p-6 hover:bg-green-200/50 transition-colors duration-300',
    header: 'bg-green-50/80 backdrop-blur-md',
    headerLink: 'text-green-700 hover:text-green-900 transition-colors duration-300',
    timeline: {
      line: 'bg-green-200',
      dot: 'bg-green-600'
    },
    timelineAnimation: 'from-green-200 to-green-600',
    heroPattern: 'radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 25%)',
    floatingIcons: 'text-green-600'
  },
  sunset: {
    background: 'bg-[#FFF5EE]',
    backgroundStyle: 'linear-gradient(to bottom, #FFF5EE, #FFE0B2)',
    text: 'text-[#FF5722]',
    primary: 'text-[#FF5722]',
    secondary: 'text-[#FF5722]',
    button: 'relative overflow-hidden group bg-[#FF5722] text-dark hover:bg-[#F4511E] px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl',
    buttonRipple: 'absolute top-0 left-0 w-full h-full bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left',
    iconBackground: 'bg-[#FFF3E0]',
    icon: 'text-[#FF5722]',
    card: 'bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-[#FFE0B2]',
    skillCard: 'bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-[#FFE0B2] hover:border-[#FFCC80]',
    activityCard: 'bg-[#FFF3E0] rounded-lg p-6 hover:bg-[#FFE0B2] transition-colors duration-300',
    header: 'bg-[#FFF5EE]/80 backdrop-blur-md',
    headerLink: 'text-[#FF5722] hover:text-[#F4511E] transition-colors duration-300',
    timeline: {
      line: 'bg-[#FFE0B2]',
      dot: 'bg-[#FF5722]'
    },
    timelineAnimation: 'from-[#FFE0B2] to-[#FF5722]',
    heroPattern: 'radial-gradient(circle at 50% 50%, rgba(255, 87, 34, 0.1) 0%, transparent 25%)',
    floatingIcons: 'text-[#FF5722]'
  }
}

