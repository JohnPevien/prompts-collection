import { useState } from 'react'
import prompts from '../code-prompts.json'
import { Input } from './components/ui/input'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './components/ui/card'
import { Button } from './components/ui/button'
import { Search } from 'lucide-react'

type Prompt = {
  prompt: string
  codeSelection: boolean
  codebase: boolean
}

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const promptEntries = Object.entries(prompts) as [string, Prompt][]

  const filteredPrompts = promptEntries.filter(([title, prompt]) =>
    title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    prompt.prompt.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Code Prompts Collection</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of useful prompts for code-related tasks
          </p>
        </div>
        
        <div className="relative max-w-2xl mx-auto mb-8">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search prompts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 w-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPrompts.map(([title, prompt]) => (
            <Card key={title} className="h-full flex flex-col">
              <CardHeader className="flex-1">
                <CardTitle className="text-xl mb-2">{title}</CardTitle>
                <CardDescription className="text-sm">{prompt.prompt}</CardDescription>
              </CardHeader>
              <CardFooter className="gap-2">
                {prompt.codeSelection && (
                  <Button variant="outline" size="sm">
                    Code Selection
                  </Button>
                )}
                {prompt.codebase && (
                  <Button variant="outline" size="sm">
                    Codebase
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
