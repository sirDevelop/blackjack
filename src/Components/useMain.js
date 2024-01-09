import { createContext, useContext } from "react"

const MainContent = createContext()

export function useMain() {
	return useContext(MainContent)
}

const MainComponent = ({ children }) => {
	
	return (
		<MainContent.Provider
			value={{
				
			}}
		>
			{children}
		</MainContent.Provider>
	)
}

export default MainComponent
