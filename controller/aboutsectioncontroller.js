import TextEntry from '../model/aboutsectionmodel.js';

// Update an existing text entry by ID
export const updateText = async (req, res) => {
  try {
    // const { id } = req.params;      // ID of the entry to update
    const { text1, text2 } = req.body;
    console.log(req.body);
    

    // Validate input
    if (!text1 || !text2) {
      return res.status(400).json({ message: 'Both text fields are required' });
    }

    // Find and update the entry
    const updatedEntry = await TextEntry.findOneAndUpdate(
      {},
      { text1, text2 },
      { new: true, runValidators: true } // return updated doc and validate
    );

    if (!updatedEntry) {
      return res.status(404).json({ message: 'Text entry not found' });
    }

    res.status(200).json({
      message: 'Text updated successfully',
      data: updatedEntry,
    });
  } catch (error) {
    console.error('Error updating text:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getAllTexts = async (req, res) => {
  try {
    const text = await TextEntry.findOne(); // get first document
    if (!text) return res.status(404).json({ message: 'No text found' });

    res.status(200).json({ data: text }); // wrap inside 'data' key
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}