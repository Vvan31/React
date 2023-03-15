import React, { useEffect, useState } from 'react'
import Search from './components/Search'
import Table from './components/Table'
import Button from './components/Button'

const PATH_BASE = 'https://hn.algolia.com/api/v1'
const PATH_SEARCH = '/search'
const PARAM_SEARCH = 'query='
const PARAM_PAGE = 'page='


function Lab() {
    const [result, setResult] = useState(null);
    const [searchTerm, setSearchTerm] = useState('React');

    const setSearchTopStories = result => {
        const { hits, page } = result

        const oldHits = page !== 0 ? result.hits : []

        const updatedHits = [...oldHits, ...hits]

        setResult({ hits: updatedHits, page })
    /*     this.setState({
            result: { hits: updatedHits, page }
        }) */
    }

    const fetchSearchTopStories = (searchTerm, page = 0) => {
        fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`)
            .then(response => response.json())
            .then(result => setSearchTopStories(result))
            .catch(err => err)
    }

    useEffect(() => {   
        fetchSearchTopStories(searchTerm)
    }, [])

    const onSearchChange = event => {
       /*  this.setState({ searchTerm: event.target.value }) */
        setSearchTerm(event.target.value)
    }

    const onSearchSubmit = event => {
        /* const { searchTerm } = state */
        fetchSearchTopStories(searchTerm)
        event.preventDefault()
    }

    const onDismiss = id => {
        const isNotId = item => item.objectID !== id
        const updatedHits = result.hits.filter(isNotId)
        setResult({ ...result, hits: updatedHits })
        /* this.setState({
            result: { ...result, hits: updatedHits }
        }) */
    }

    const page = (result && result.page) || 0;
    return (
        <div className="page">
        <div className="interactions">
            <Search
                value={searchTerm}
                onChange={onSearchChange}
                onSubmit={onSearchSubmit}
            >
                Search
            </Search>
        </div>
        <div className="articles">
            {result && (
                <Table
                    list={result.hits}
                    onDismiss={onDismiss}
                />
            )}
        </div>
        <footer>
            <Button onClick={() => fetchSearchTopStories(searchTerm, page + 1)}>
                More
            </Button>
        </footer>
    </div>
    )
  }
  
  export default Lab

/* export default class Lab extends Component {

    state = {
        result: null,
        searchTerm: 'React'
    }

    setSearchTopStories = result => {
        const { hits, page } = result

        const oldHits = page !== 0 ? this.state.result.hits : []

        const updatedHits = [...oldHits, ...hits]

        this.setState({
            result: { hits: updatedHits, page }
        })
    }

    fetchSearchTopStories = (searchTerm, page = 0) => {
        fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`)
            .then(response => response.json())
            .then(result => this.setSearchTopStories(result))
            .catch(err => err)
    }

    componentDidMount() {
        const { searchTerm } = this.state
        this.fetchSearchTopStories(searchTerm)
    }
 
    onSearchChange = event => {
        this.setState({ searchTerm: event.target.value })
    }

    onSearchSubmit = event => {
        const { searchTerm } = this.state
        this.fetchSearchTopStories(searchTerm)
        event.preventDefault()
    }

    onDismiss = id => {
        const isNotId = item => item.objectID !== id
        const updatedHits = this.state.result.hits.filter(isNotId)
        this.setState({
            result: { ...this.state.result, hits: updatedHits }
        })
    }

    render() {
        const { searchTerm, result } = this.state
        const page = (result && result.page) || 0
        return (
            <div className="page">
                <div className="interactions">
                    <Search
                        value={searchTerm}
                        onChange={this.onSearchChange}
                        onSubmit={this.onSearchSubmit}
                    >
                        Search
                    </Search>
                </div>
                <div className="articles">
                    {result && (
                        <Table
                            list={result.hits}
                            onDismiss={this.onDismiss}
                        />
                    )}
                </div>
                <footer>
                    <Button onClick={() => this.fetchSearchTopStories(searchTerm, page + 1)}>
                        More
                    </Button>
                </footer>
            </div>
        )
    }
}
*/