export default function ThemeSwitcher({ currentTheme, setTheme }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className={`${currentTheme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
        Choose a theme:
      </span>
      <select
        value={currentTheme}
        onChange={(e) => setTheme(e.target.value)}
        className="px-4 py-2 rounded-lg border bg-white/10 backdrop-blur-sm text-inherit"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="nature">Nature</option>
        <option value="sunset">Sunset</option>
      </select>
    </div>
  )
}

